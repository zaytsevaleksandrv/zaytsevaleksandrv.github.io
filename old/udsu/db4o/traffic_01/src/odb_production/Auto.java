package traffic_01;

// Автомобиль
public class Auto {

	private String brandCars; // марка авто
	private String seriesNumberTechPas; // серия и номер технического паспорта
	private String stateRoom; // гос. номер
	private String engineNumber; // номер двигателя
	private String bodyNumber; // номер кузова
	private String nameOwner; // фио владельца

	public Auto(String brandCars, String seriesNumberTechPas, String stateRoom, String engineNumber, String bodyNumber, String nameOwner) {
		this.brandCars = brandCars;
		this.seriesNumberTechPas = seriesNumberTechPas;
		this.stateRoom = stateRoom;
		this.engineNumber = engineNumber;
		this.bodyNumber = bodyNumber;
		this.nameOwner = nameOwner;
	}

	public String getBrandCars() {
		return this.brandCars;
	}

	public String getSeriesNumberTechPas() {
		return this.seriesNumberTechPas;
	}

	public String getStateRoom() {
		return this.stateRoom;
	}

	public String getEngineNumber() {
		return this.engineNumber;
	}
	
	public String getBodyNumber() {
		return this.bodyNumber;
	}
	
	public String getNameOwner() {
		return this.nameOwner;
	}

	@Override
	public String toString() {
		return "Марка авто: " + brandCars + "\n Серия и номер технического паспорта: " + seriesNumberTechPas + "\n Гос. номер: " + stateRoom
				+ "\n Номер двигателя: " + engineNumber + "\n Номер кузова: " + bodyNumber + "\n ФИО владельца: " + nameOwner;
	}
}
