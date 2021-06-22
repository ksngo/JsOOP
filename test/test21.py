class Animal:
    _number_of_legs = 0  # class attributes
    _pair_of_eyes = 0

    def __init__(self, age):
        self._age = age  # instance attributes , _ means protected
        print("1 Animal created")

    @property  # use @property to define getter and setter for protected/private attributes
    def age(self):
        return self._age

    @age.setter
    def age(self, age):
        self._age = age

    # public method , it's possible to sort of get private/protected attributes without @property too
    def print_legs_and_eyes(self):
        print(str(self._number_of_legs) + " legs and " +
              str(self._pair_of_eyes*2) + "eyes")

    def print_age(self):  # public method
        print(str(self._age) + "years old")

    # overloading operators in python
    def __lt__(self, other):
        return self.age < other.age # print(animal1 < animal2) , animal1 is self, animal2 is other, returns a boolean
    def __le__(self, other):
        return self.age <= other.age # print(animal1 <= animal2)
    def __gt__(self, other):
        return self.age > other.age # print(animal1 > animal2)
    def __ge__(self, other):
        return self.age >= other.age # print(animal1 >= animal2)


class Mammal(Animal):  # inheriting from superclass Animal
    _pair_of_eyes = 1  # will overide the superclass

    def __init__(self, age, is_pregnant=False):
        # super() referring to Animal and method __init__ the age.
        super().__init__(age)
        self._is_pregnant = is_pregnant
        print("2 mammal created")

    @property
    def is_pregnant(self):
        return self._is_pregnant

    @is_pregnant.setter
    def is_pregnant(self, is_pregnant):
        self._is_pregnant = is_pregnant


class DomesticMammal(Mammal):
    def __init__(self, name, age, favourite_toy, is_pregnant=False):
        super().__init__(age, is_pregnant)
        self._name = name
        self._favourite_toy = favourite_toy  # protected instance attribute
        print("3 DomesticMammal created")

    @property
    def name(self):
        return self._name

    @property
    def favourite_toy(self):
        return self._favourite_toy

    @favourite_toy.setter
    def favourite_toy(self, favourite_toy):
        self._favourite_toy = favourite_toy

    def talk(self):
        print(self._name + ": talks")


class Dog(DomesticMammal):
    # class attributes, just declare with same name to override the _number_of_legs in Animal class(superclass)
    _number_of_legs = 4
    _breed = "Just a dog"
    _breed_family = "Dog"

    def __init__(self, name, age, favourite_toy, is_pregnant=False):
        super().__init__(name, age, favourite_toy, is_pregnant)
        print("4 Dog created")

    # Python doesn't allow us to overload methods, hence we can take advantage of optional arguments
    def bark(self, times=1, other_domestic_mammal=None, is_angry=False):
        # this should trigger the @property in DomesticMammal class to get the name
        message = self.name

        if other_domestic_mammal is not None:
            message += " to " + other_domestic_mammal.name + ": "
        else:
            message += ": "
        if is_angry:
            message += "Grr "
        message += "Woof "*times
        print(message)

    def talk(self):  # just declare with same name to override the talk method inside DomesticMammal class
        self.bark()

    @classmethod  # refers back to Dog class where cls refers to Dog
    def print_breed(cls):
        print(cls._breed)

    @classmethod
    def print_breed_family(cls):
        print(cls._breed_family)


class TerrierDog(Dog):
    _breed = "Terrier dog"  # will override the class attributes in Dog class
    _breed_family = "Terrier"

    def __init__(self, name, age, favourite_toy, is_pregnant=False):
        super().__init__(name, age, favourite_toy, is_pregnant)
        print("5 TerrierDog created")


class SmoothFoxTerrier(TerrierDog):
    _breed = "Smooth Fox Terrier"  # will override the class attributes in Dog class

    def __init__(self, name, age, favourite_toy, is_pregnant=False):
        super().__init__(name, age, favourite_toy, is_pregnant)
        print("6 SmoothFoxTerrier created")

SmoothFoxTerrier.print_breed() 
SmoothFoxTerrier.print_breed_family()

tom = SmoothFoxTerrier("Tom", 5, "Sneakers")
pluto = SmoothFoxTerrier("Pluto", 8, "SOda Bottle")

print(tom > pluto)

tom.talk()
tom.bark()
tom.bark(2)
tom.bark(2,pluto)
tom.bark(2, pluto, True)

