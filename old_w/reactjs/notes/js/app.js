var Head = React.createClass({
	render: function(){
		return (
			<div className="row flex-items-xs-middle block_head">
				<h1>notes</h1>
				<div className="block_head_bac"></div>
			</div>
		);
	}
});	

var MainCellRow1 = React.createClass({
	render: function(){
		return (
			<div className="row">
				<li className="col-md-3 block_es6 block_emmet flex-items-xs-middle"><a href="file/emmet.html"><h1 className="flex-items-xs-middle">Emmet</h1></a></li>
				<li className="col-md-3 block_es6 flex-items-xs-middle"><a href="file/es6.html"><h1 className="flex-items-xs-middle">ES6</h1></a></li>
				<li className="col-md-3 block_es6 block_bs4 flex-items-xs-middle"><a href="file/bs4.html"><h1 className="flex-items-xs-middle">Bootstrap 4</h1></a></li>
				<li className="col-md-3 block_es6 block_vuejs flex-items-xs-middle"><a href="file/vuejs.html"><h1 className="flex-items-xs-middle">Vue.js</h1></a></li>
			</div>
		);
	}
});
var MainCellRow2 = React.createClass({
	render: function(){
		return (
			<div className="row">
				<li className="col-md-3 block_es6 block_reactjs flex-items-xs-middle"><a href="file/reactjs.html"><h1 className="flex-items-xs-middle">React.js</h1></a></li>
				<li className="col-md-3 block_es6 block_a2 flex-items-xs-middle"><a href="file/a2.html"><h1 className="flex-items-xs-middle">Angular 2</h1></a></li>
				<li className="col-md-3 block_es6 flex-items-xs-middle"><a href="file/babel.html"><h1 className="flex-items-xs-middle">Babel</h1></a></li>
				<li className="col-md-3 block_es6 block_html flex-items-xs-middle"><a href="file/html.html"><h1 className="flex-items-xs-middle">HTML</h1></a></li>
			</div>
		);
	}
});
var MainCellRow3 = React.createClass({
	render: function(){
		return (
			<div className="row">
				<li className="col-md-3 block_es6 block_css flex-items-xs-middle"><a href="file/css.html"><h1 className="flex-items-xs-middle">CSS</h1></a></li>
				<li className="col-md-3 block_es6 block_st3 flex-items-xs-middle"><a href="file/st3.html"><h1 className="flex-items-xs-middle">Sublime Text 3</h1></a></li>
				<li className="col-md-3 block_es6 block_git flex-items-xs-middle"><a href="file/git.html"><h1 className="flex-items-xs-middle">GitHub</h1></a></li>
				<li className="col-md-3 block_es6 block_jq flex-items-xs-middle"><a href="file/jq.html"><h1 className="flex-items-xs-middle">jQuery</h1></a></li>
			</div>
		);
	}
});
var FooterMail = React.createClass({
	render: function(){
		return(
			<div className="col-md-12">
				<a href="mailto:zaytsev.aleksandr.v@gmail.com"><h4>zaytsev.aleksandr.v@gmail.com</h4></a>
			</div>
		);
	}
});

var App = React.createClass({
  render: function() {
    return (
      <div className="container">
        <Head />
	      <ul className="col-md-12">
	      	<MainCellRow1 />
	      </ul>
	      <ul className="col-md-12">
	      	<MainCellRow2 />
	      </ul>
	      <ul className="col-md-12">
	      	<MainCellRow3 />
	      </ul>
	      <footer>
	      	<FooterMail />
		  </footer>
      </div>
    );
  }
});

ReactDOM.render(
  <App />,
  document.getElementById('root')
);