package traffic_01;

// Постановление
public class Resolution {

	private String seriesDriverLicenseNumber; // серия и номер водительского удостоверения
	private String stateRoom; // гос. номер
	private String nameViolation; // название нарушения
	private String dateViolation; // дата нарушения

	public Resolution(String seriesDriverLicenseNumber, String stateRoom, String nameViolation, String dateViolation) {
		this.seriesDriverLicenseNumber = seriesDriverLicenseNumber;
		this.stateRoom = stateRoom;
		this.nameViolation = nameViolation;
		this.dateViolation = dateViolation;
	}

	public String getSeriesDriverLicenseNumber() {
		return this.seriesDriverLicenseNumber;
	}
	
	public String getStateRoom() {
		return this.stateRoom;
	}

	public String getNameViolation() {
		return this.nameViolation;
	}
	
	public String getDateViolation() {
		return this.dateViolation;
	}

	@Override
	public String toString() {
		return "Серия и номер водительского удостоверения: " + seriesDriverLicenseNumber + "\n Гос. номер: " + stateRoom
				+ "\n Название нарушения: " + nameViolation + "\n Дата нарушения: " + dateViolation;
	}
}
