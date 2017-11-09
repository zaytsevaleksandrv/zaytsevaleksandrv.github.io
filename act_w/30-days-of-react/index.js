// объект с данными
const activities = [
  {
    timestamp: new Date().getTime(),
    text: "Ate lunch",
    user: {
      id: 1,
      name: 'Nate',
      avatar: "http://www.croop.cl/UI/twitter/images/doug.jpg"
    },
    comments: [
      {
        from: 'Ari',
        text: 'Me too!'
      }
    ]
  }, {
    timestamp: new Date().getTime(),
    text: "Woke up early for a beautiful run",
    user: {
      id: 2,
      name: 'Ari',
      avatar: "http://www.croop.cl/UI/twitter/images/doug.jpg"
    },
    comments: [
      {
        from: 'Nate',
        text: 'I am so jealous'
      }
    ]
  }
];

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="header">

          <div className="menuIcon">
            <div className="dashTop"></div>
            <div className="dashBottom"></div>
            <div className="circle"></div>
          </div>

          <span className="title">
            {this.props.title}
          </span>

          <input type="text" className="searchInput" placeholder="Search ..."/>

          <div className="fa fa-search searchIcon"></div>
        </div>
      </div>
    )
  }
}

class ActivityItem extends React.Component {
  render() {
    const {activity} = this.props; // ES6 destructuring

    return (
      <div className="item">
        <div className="avatar">
          <img alt={activity.text} src={activity.user.avatar}/> {activity.user.name}
        </div>

        <span className="time">
          {activity.timestamp}
        </span>
        <p>{activity.text}</p>
        <div className="commentCount">
          {activity.comments.length}
        </div>
      </div>
    )
  }
}

class Content extends React.Component {
  render() {
    const {activities} = this.props;

    return (<div className="content">
      <div className="line"></div>
      {activities.map((activity) => (<ActivityItem activity={activity}/>))}

    </div>)
  }
}

class Container extends React.Component {
  constructor(props) {
    super(props);

    this.state = {refreshing: false}
  }

  // Bound to the refresh button
  refresh() {
    this.setState({refreshing: true})
  }

  // Callback from the `Content` component
  onComponentRefresh() {
    this.setState({refreshing: false});
  }

  render() {
    const {refreshing} = this.state;
    return (
      <div className='notificationsFrame'>
        <div className='panel'>
          <Header title="Github activity" />
          {/* refreshing is the component's state */}
          <Content
            onComponentRefresh={this.onComponentRefresh.bind(this)}
            requestRefresh={refreshing}
            fetchData={fetchEvents} />
          {/* A container for styling */}
          <Footer>
            <button onClick={this.refresh.bind(this)}>
              <i className="fa fa-refresh" />
              Refresh
            </button>
          </Footer>
        </div>
      </div>
    )
  }
}

class Footer extends React.Component {
  render() {
    return (
      <div className='footer'>
        {this.props.children}
      </div>
    )
  }
}

class App extends React.Component {
  render() {
    return (<div className="notificationsFrame">
      <div className="panel">
        <Header title="График"/>
        <Content activities={activities}/>
      </div>
    </div>)
  }
}
var mount = document.querySelector('#app');
ReactDOM.render(<App/>, mount);
