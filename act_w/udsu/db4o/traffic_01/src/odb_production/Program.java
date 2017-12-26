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
import com.db4o.query.Evaluation;

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
			Auro a_02 = new Auto("Lada", "77ТК123456", "Х123ВР18", "ZJ-020202", "12345678В", "Иванов Иван Иванович");
			Auro a_03 = new Auto("Lada", "77ТК123456", "Х123ВР18", "ZJ-020202", "12345678В", "Иванов Иван Иванович");
			Auro a_04 = new Auto("Lada", "77ТК123456", "Х123ВР18", "ZJ-020202", "12345678В", "Иванов Иван Иванович");
			Auro a_05 = new Auto("Lada", "77ТК123456", "Х123ВР18", "ZJ-020202", "12345678В", "Иванов Иван Иванович");
			Auro a_06 = new Auto("Lada", "77ТК123456", "Х123ВР18", "ZJ-020202", "12345678В", "Иванов Иван Иванович");
			Auro a_07 = new Auto("Lada", "77ТК123456", "Х123ВР18", "ZJ-020202", "12345678В", "Иванов Иван Иванович");

			Violation v_01 = new Violation("Превышение скорости", "ПС-1");
			Violation v_02 = new Violation("Превышение скорости", "ПС-1");
			Violation v_03 = new Violation("Превышение скорости", "ПС-1");
			Violation v_04 = new Violation("Нет знака шипы", "НЗШ-1");
			Violation v_05 = new Violation("Нет аптечки", "НА-1");
			Violation v_06 = new Violation("Нет аптечки", "НА-1");
			Violation v_07 = new Violation("Без страховки", "БС-1");

			Driver d_01 = new Driver("Иванов Иван Иванович", "Ижевск, ул. Удмуртская, д. 1, кв. 1", "17ТR123456");
			Driver d_02 = new Driver("Иванов Иван Иванович", "Ижевск, ул. Удмуртская, д. 1, кв. 1", "17ТR123456");
			Driver d_03 = new Driver("Иванов Иван Иванович", "Ижевск, ул. Удмуртская, д. 1, кв. 1", "17ТR123456");
			Driver d_04 = new Driver("Иванова Анна Ивановна", "Ижевск, ул. Удмуртская, д. 4, кв. 1", "27ТR123456");
			Driver d_05 = new Driver("Иванова Анна Ивановна", "Ижевск, ул. Удмуртская, д. 4, кв. 1", "27ТR123456");
			Driver d_06 = new Driver("Иванов Алексей Сергеевич", "Ижевск, ул. Удмуртская, д. 6, кв. 1", "37ТR123456");
			Driver d_07 = new Driver("Иванова Алла Михеевна", "Ижевск, ул. Удмуртская, д. 7, кв. 1", "47ТR123456");

			Resolution r_01 = new Resolution(d_01.seriesDriverLicenseNumber, a_01.stateRoom, v_01.nameViolation, "1 ноября 2017");
			Resolution r_02 = new Resolution(d_02.seriesDriverLicenseNumber, a_02.stateRoom, v_02.nameViolation, "1 ноября 2017");
			Resolution r_03 = new Resolution(d_03.seriesDriverLicenseNumber, a_03.stateRoom, v_03.nameViolation, "1 ноября 2017");
			Resolution r_04 = new Resolution(d_04.seriesDriverLicenseNumber, a_04.stateRoom, v_04.nameViolation, "2 ноября 2017");
			Resolution r_05 = new Resolution(d_05.seriesDriverLicenseNumber, a_05.stateRoom, v_05.nameViolation, "2 ноября 2017");
			Resolution r_06 = new Resolution(d_06.seriesDriverLicenseNumber, a_06.stateRoom, v_06.nameViolation, "3 ноября 2017");
			Resolution r_07 = new Resolution(d_07.seriesDriverLicenseNumber, a_07.stateRoom, v_07.nameViolation, "4 ноября 2017");


			db.store(r_01);
			db.store(r_02);
			db.store(r_03);
			db.store(r_04);
			db.store(r_05);
			db.store(r_06);
			db.store(r_07);

			db.commit();



			X = new ArrayList<>();


			// Вывести нарушения, которые совершаются чаще всего.
			ObjectSet<Resolution> resolution = db.query(new Predicate<Resolution>() {
				private static final long serialVersionUID = 1L;

				public boolean match(Resolution resolution) {
					return resolution.getNameViolation() > 1;
				}
			});
			// System.out.println ("Нарушения, которые совершаются чаще всего");
			listResult(resolution);

			// Вывести марку автомобиля, на котором чаще всего совершается нарушение
			// "Превышение скорости".
			final String typeName = "Превышение скорости";
			ObjectSet<Resolution> results = db.query(new Predicate<Resolution>() {
				private static final long serialVersionUID = 1L;

				@Override
				public boolean match(Resolution resolution) {
					System.out.println("Вход");
					int b = 0;
					for (resolution s : resolution.getNameViolation().getStateRoom()) {
						if (s.getStateRoom().getBrandCars().equals(typeName))
							b++;
					}
					X.add((double) (b / resolution.getNameViolation().getStateRoom().size()));
					return true;
				}
			});

			// - Вывести водителей с наибольшим и наименьшим количеством штрафов.
    	ObjectSet<Resolution> results = db.query(new Predicate<Resolution>()

		    for (int i = 0; i < getNameViolation.size(); i++) {
		      Character tempChar = getNameViolation.get(i);

		      if (!lettersHappiness.containsKey(tempChar)) {
		        lettersHappiness.put(tempChar, 1);
		      } else {
		        lettersHappiness.put(tempChar, lettersHappiness.get(tempChar) + 1);
		      }
		    }

		    for (Map.Entry<Character, Integer> entry : lettersHappiness.entrySet()) {
		      System.out.println("Нарушение = " + entry.getNameViolation() + ", Количество = " + entry.getValue() + "Водитель = " + entry.getNameOwner());
		    }

				// - Вывести общее количество нарушений, совершенных в заданный период
				public final class resolutionDriverEvaluation implements Evaluation {
		    private int    mYear;
		    private boolean mExceptSpecifiedYear;
				 query.constrain(new resolutionDriverEvaluation(2017, true));

		    public resolutionDriverEvaluation(int year, boolean exceptSpecifiedYear) {
						mYear = year;

						mExceptSpecifiedYear = exceptSpecifiedYear;
			    }

			    public void evaluate(getSeriesDriverLicenseNumber driver) {
						ISpecification spec = (ISpecification)driver.getObject();

						Calendar calendar = Calendar.getInstance();
						calendar.setTime(spec.getDateViolation());

						int resolutionYear = calendar.get(Calendar.YEAR);

						driver.include(mExceptSpecifiedYear ? (mYear != resolutionYear) : (mYear == resolutionYear));

						System.out.println("Нарушение = " + getNameViolation() + ", Количество = " + entry.getValue());
			    }
			}

		} finally {
			if (db != null)
				db.close();
		}

	}

}
