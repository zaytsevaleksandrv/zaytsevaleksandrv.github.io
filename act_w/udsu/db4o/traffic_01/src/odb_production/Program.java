package traffic_01;

import java.util.ArrayList;
import java.util.List;

/*import com.db4o.ObjectContainer;
import com.db4o.ObjectSet;*/
import com.db4o.Db4oEmbedded;
import com.db4o.ObjectContainer;
import com.db4o.ObjectSet;
import com.db4o.query.Predicate;
import com.db4o.query.Query;

public class Program {

	private static ArrayList<Double> X;

	public static void listResult(ObjectSet result) {
		System.out.println(result.size());
		while (result.hasNext()) {
			System.out.println(result.next());
		}
	}

	public static void main(String[] args) throws Exception {
		ObjectContainer db;// = Db4o.openFile("traffic_01.data");
		String dB4oFileName = "traffic_01";
		db = Db4oEmbedded.openFile(Db4oEmbedded.newConfiguration(), dB4oFileName);

		try {
			// db = Db4o.openFile("traffic_01.data");

			Auro a_01 = new Auto("Lada", "77ТК123456", "Х123ВР18", "ZJ-020202", "12345678В", "Иванов Иван Иванович");

			Violation v_01 = new Violation("Превышение скорости", "ПС-1");
			
			Driver d_01 = new Driver("Иванов Иван Иванович", "Ижевск, ул. Удмуртская, д. 1, кв. 1", "77ТR123456");
			
			Resolution r_01 = new Resolution(d_01.seriesDriverLicenseNumber, a_01.stateRoom, v_01.nameViolation, "1 ноября 2017");
			

			db.store(r_01);

			db.commit();

		

			X = new ArrayList<>();

		} finally {
			if (db != null)
				db.close();
		}

	}

}