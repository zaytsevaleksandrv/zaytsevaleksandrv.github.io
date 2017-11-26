package traffic_01;

// Водитель
public class Driver {

	private String nameOwner; // ФИО водителя
	private String address; // адрес
	private String seriesDriverLicenseNumber; // серия и номер водительского удостоверения

	public Driver(String nameOwner, String address, String seriesDriverLicenseNumber) {
		this.nameOwner = nameOwner;
		this.address = address;
		this.seriesDriverLicenseNumber = seriesDriverLicenseNumber;
	}

	public String getNameOwner() {
		return this.nameOwner;
	}

	public String getAddress() {
		return this.address;
	}

	public String getSeriesDriverLicenseNumber() {
		return this.seriesDriverLicenseNumber;
	}

	@Override
	public String toString() {
		return "ФИО водителя: " + nameOwner + "\n Адрес: " + address + "\n Серия и номер водительского удостоверения: " + seriesDriverLicenseNumber;
	}
}

