
class Dog {

    String name;
    String breed;
    int age;
    String color;

    Dog(String name, String breed, int age, String color) {
        this.name = name;
        this.breed = breed;
        this.age = age;
        this.color = color;
    }

    void bark() {
        print("Woof! Woof!");
    }

    void displayInfo() {
        print("Name: " + name);
        print("Breed: " + breed);
        print("Age: " + age + " years");
        print("Color: " + color);
    }

    public static void main(String[] args) {
        
        Dog myDog = new Dog("Buddy", "Golden Retriever", 3, "Golden");
        

        myDog.bark();
      
        myDog.displayInfo();
    }
}