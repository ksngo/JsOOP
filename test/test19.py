class Dog:
    def __init__(self,age, sex):
        self.age = age
        self.sex = sex

dog1 = Dog(11,'male')
print('DogPublic')
print('____________')
print(dog1.age)
print(dog1.sex)
print('____________')

class DogPrivate:
    
    country = 'singapore' # class attributes

    def __init__(self,age, sex, favourite_food): # __init__ constructor for instance
        self.__age = age # instance attributes
        self.__sex = sex # __ means it's private attribute
        self.__favourite_food = favourite_food
    
    def addAge(self, toadd): # this is a public method , @property is prefered to set the age.
        self.__age = self.__age + toadd

    def addAgeForImmutableClass(self, toadd): # if want an immutable class, this will totally create a new instance so that the original instance is not mutated. 
        return type(self)(self.__age + toadd, 'male', 'dog food')

    @classmethod # this class method will refer back to class DogPrivate and return an instance of DogPrivate(1, 'male', 'dog food')
    def default(cls):
        return cls(1, 'male', 'dog food')
        
    
    @property # used to access private
    def getage(self):
        return self.__age
    
    @property
    def getfavourite_food(self):
        return self.__favourite_food

    @getfavourite_food.setter # used to set private in conjunction with @property
    def setFavFood(self, food):
        print(f'setting private favourite food to {food}')
        self.__favourite_food = food
    
    @property
    def accessprivate(self):
        return f'Dog age is {self.__age}. Dog sex is {self.__sex}. Dog favourite food is {self.__favourite_food}. Dog\'s country is {type(self).country}.'
    
    # self is referring to the instance
    # type(self) refers to class DogPrivate
    # use type(self).country will be able to access the class attributes

dog2 = DogPrivate(12,'female', 'chocolate') # initialize an instance dog2 from class DogPrivate and setting the three private attributes
# cannot access the private attributes simply by e.g. dog2.age , have to use the getter
print('DogPrivate')
print('____________')
print(dog2.getage)
print(dog2.getfavourite_food)
print(dog2.accessprivate)
# dog2.setFavFood('coconut') # this is wrong
dog2.setFavFood = 'coconut'
print(dog2.getfavourite_food)
print(dog2.accessprivate)
dog2.addAge(3) # this is public method of the class
print(dog2.accessprivate)
dog4 = DogPrivate.default() # this will initialise using the class method to my default values instead of the normal need of DogPrivate('1', 'male', 'dog food')
print(dog4.accessprivate) #1, the dog4 age is 1 , which is initalise following default values
print('EXAMPLE TO IMMUTABLE CLASS:')
print(dog4.addAgeForImmutableClass(5).accessprivate) #6, See! I create another instance of class to add 5 years to age. Result of this new instance class is age is 6.
print(dog4.accessprivate) #1 , See! the dog4 intance is still age 1. It's not affected by the new instance.
print(dog4.addAge(2)) 
print(dog4.accessprivate) #3 See! the dog4 instance is mutated.
print('____________')

class DogProtected:
    def __init__(self,age, sex):
        self._age = age
        self._sex = sex

print('DogProtected')
print('____________')
dog3 = DogProtected(13, 'superman')
print(dog3._age)
dog3._age = 14 
print(dog3._age)
print('____________')