# base class
class ComicCharacter:    
    def __init__(self, nick_name):
        self._nick_name = nick_name
    
    @property
    def nick_name(self):
        return self._nick_name
    
    def draw_speech_balloon(self, message, destination):
        pass

    def draw_thought_balloon(self, message):
        pass


class GameCharacter:
    def __init__(self, full_name, initial_score, x, y):
        self._full_name = full_name
        self.score = initial_score
        self.x = x
        self.y = y
    
    @property
    def full_name(self):
        return self._full_name

    def draw(self,x,y):
        pass

    def move(self,x,y):
        pass

    def is_intersecting_with(self, other_character):
        pass

class Alien:
    def __init__(self,number_of_eyes):
        self.number_of_eyes = number_of_eyes

    def appear(self):
        pass

    def disappear(self):
        pass

class Wizard:
    def __init__(self, spell_power):
        self.spell_power = spell_power
    
    def disappear_alien(self, alien):
        pass

class Knight:
    def __init__(self, sword_power, sword_weight):
        self.sword_power = sword_power
        self.sword_weight = sword_weight
    
    def unsheath_sword(self, target):
        pass

#subclass of ComicCharacter

class AngryDog(ComicCharacter): 
    #without 
    # def __init__(self, nick_name): 
    #   super().__init__(nick_name)
    # I think it will still run ComicCharacter init
    # actually, not sure what is the difference
    def _speak(self, message):
        print(self.nick_name + ' -> "' + message + '"')

    def _think(self, message):
        print(self.nick_name + ' ***' + message + '***')
    
    def draw_speech_balloon(self, message, destination):
        if destination is None:
            composed_message = message
        else:
            composed_message = destination.nick_name + ", " + message
        self._speak(composed_message)
    
    def draw_thought_balloon(self, message):
        self._think(message)
    
# multiple base classes

class AngryCat(ComicCharacter, GameCharacter):
    def __init__(self, nick_name, age, full_name, initial_score, x, y):
        ComicCharacter.__init__(self,nick_name) # not using super() due more than a class of inheritance , and also pass self as first argument
        GameCharacter.__init__(self,full_name, initial_score, x, y)
        self.age = age
    
    def draw_speech_balloon(self, message, destination): # overide methods in ComicCharacter
        if destination is None:
            composed_message = self.nick_name + ' ->"'
            if self.age > 5:
                meow = 'Meow'
            else:
                meow = 'Meeeeow Meeeeeow'
            composed_message = '{} -> "{} {}"'.format(self.nick_name, meow, message)
        else:
            composed_message = '{} === {} ---> {}'.format(destination.nick_name, self.nick_name, message)
        
        print(composed_message)

    
    def draw_thought_balloon(self,message): # overide methods in ComicCharacter
        print('{} thinks: {}'.format(self.nick_name, message))

    def draw(self, x, y): # overide methods in GameCharacter
        self.x = x
        self.y = y
        print('Drawing AngryCat {} at x: {}, y: {}'.format( self.full_name, str(self.x), str(self.y)))

    def move(self,x,y): # overide methods in GameCharacter
        self.x = x
        self.y = y
        print('Moving AngryCat {} to x: {}, y: {}'.format(self.full_name, str(self.x), str(self.y)))
    
    def is_intersecting_with(self, other_character): # overide methods in GameCharacter
        return self.x == other_character.x and self.y == other_character.y
    

    
class AngryCatAlien(AngryCat, Alien):
    def __init__(self, nick_name, age, full_name, initial_score, x, y, number_of_eyes):
        AngryCat.__init__(self, nick_name, age, full_name, initial_score, x, y)
        Alien.__init__(self, number_of_eyes)

    def appear(self): # overides method declared in ALien superclass
        print("I'm {} and you can see my {}  eyes.".format(self.full_name, str(self.number_of_eyes)))
    
    def disappear(self): # overides method declared in ALien superclass
        print("{} disappears.".format(self.full_name))

class AngryCatWizard(AngryCat, Wizard):
    def __init__(self, nick_name, age, full_name, initial_score, x, y, spell_power):
        AngryCat.__init__(self, nick_name, age, full_name, initial_score, x, y)
        Wizard.__init__(self, spell_power)

    def disappear_alien(self, alien): # overides method declared in Wizard superclass
        print('{} uses his {} spell power to make the alien with {} eyes disappear.'.format(self.full_name, self.spell_power, alien.number_of_eyes))
        # any AngryCatAlien instance will qualify for the argument alien because AngryCatAlien has inherited the attribute from the ALien superclass
    
class AngryCatKnight(AngryCat, Knight):
    def __init__(self, nick_name, age, full_name, initial_score, x, y, sword_power, sword_weight):
        AngryCat.__init__(self, nick_name, age, full_name, initial_score, x, y)
        Knight.__init__(self, sword_power, sword_weight)

    def _write_lines_about_the_sword(self):
        print('{} unsheaths his sword.'.format(self.full_name))
        print('Sword Power: {} Sword Weight: {}'.format(self.sword_power, self.sword_weight))
    
    def unsheath_sword(self, target): # overides method declared in Knight superclass
        self._write_lines_about_the_sword()
        if target is not None:
            print('The sword targets an alien with {} eyes.'.format(target.number_of_eyes))
            #any AngryCatAlien instance will qualify for the argument alien because AngryCatAlien has inherited the attribute from the ALien superclass
    


angry_dog_1 = AngryDog("Brian")
angry_dog_2 = AngryDog("Merlin")
angry_dog_1.draw_speech_balloon("Hello, my name is " + angry_dog_1.nick_name, None)
angry_dog_1.draw_speech_balloon("How do you do?", angry_dog_2)
angry_dog_2.draw_thought_balloon("Who are you? I think.")

    

angry_cat_1 = AngryCat("Garfield", 10, "Mr. Garfield", 0, 10, 20)
angry_cat_1.draw_speech_balloon("Hello, my name is " + angry_cat_1.nick_name, None)
angry_dog_1.draw_speech_balloon("Hello " + angry_cat_1.nick_name,angry_cat_1)

alien_1 = AngryCatAlien("Alien", 120, "Mr. Alien", 0, 10, 20, 3)
if alien_1.is_intersecting_with(angry_cat_1):
    alien_1.move(angry_cat_1.x + 20, angry_cat_1.y + 20)
alien_1.appear()


wizard_1 = AngryCatWizard("Gandalf", 75, "Mr. Gandalf", 10000, 30, 40,100)
wizard_1.draw(wizard_1.x, wizard_1.y)
wizard_1.disappear_alien(alien_1)
alien_1.appear()

knight_1 = AngryCatKnight("Camelot", 35, "Sir Camelot", 5000, 50, 50,100, 30)
knight_1.draw(knight_1.x, knight_1.y)
knight_1.unsheath_sword(alien_1)

alien_1.draw_thought_balloon("I must be friendly or I'm dead...")
alien_1.draw_speech_balloon("Pleased to meet you, Sir.", knight_1)

print(
isinstance(alien_1, AngryCat),
isinstance(alien_1, ComicCharacter),
isinstance(alien_1, GameCharacter),
isinstance(alien_1, Alien),
isinstance(alien_1, AngryCatAlien))