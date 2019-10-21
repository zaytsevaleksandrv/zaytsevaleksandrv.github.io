package traffic_01;

// Нарушение
public class Violation {

	private String nameViolation; // название нарушения
	private String codeViolation; // шифр нарушения

	public Violation(String nameViolation, String codeViolation) {
		this.nameViolation = nameViolation;
		this.codeViolation = codeViolation;
	}

	public String getNameViolation() {
		return this.nameViolation;
	}

	public String getСodeViolation() {
		return this.codeViolation;
	}

	@Override
	public String toString() {
		return "Название нарушения: " + nameViolation + "\n Шифр нарушения: " + codeViolation;
	}
}

