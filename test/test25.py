
import random

class Animal:
    dance_characters = "" # the subclasses of Animal will override these class attributes
    spelled_cound_1 = ""
    spelled_sound_2 = ""
    spelled_sound_3 = ""

    def __init__(self, name):
        self._name = name
    
    @property
    def name(self):
        return self._name

    def dance(self):
        print('{} dances {}'.format(self._name, type(self).dance_characters)) # using type(self) to access class attributes

    def say(self, message):
        print('{} says: {}'.format(self._name, message))
    
    def say_goodbye(self, destination):
        print('{} says goodbye to {}: {} {} {}'.format(
            self._name,
            destination.name,
            type(self).spelled_sound_1,
            type(self).spelled_sound_2,
            type(self).spelled_sound_3
        ))
    def say_welcome(self, destination):
        print('{} welcomes {}: {}'.format(
            self._name,
            destination.name,
            type(self).spelled_sound_2
        ))

    def sing(self):
        spelled_sing_sound = type(self).spelled_sound_1 + \
        " "
        print('{} sings: {}. {}. {}. '.format(
            self._name,
            spelled_sing_sound*3,
            spelled_sing_sound*2,
            spelled_sing_sound
        ))



class Dog(Animal):
    dance_characters = "/-\ \-\ /-/"
    spelled_sound_1 = "Woof"
    spelled_sound_2 = "Woooof"
    spelled_sound_3 = "Grr"

class Frog(Animal):
    dance_characters = "/|\ \|/ ^ ^"
    spelled_sound_1 = "Ribbit"
    spelled_sound_2 = "Croak"
    spelled_sound_3 = "Croaaaaak"


### duck typing ### - it's passing a class in its init function and storing it to an attribute so the class object is accessible inside
                ### - for inheritance, we have to pass the class as argument in the other class(e.g. class Party(Animal)), then Party class will inherit the attributes, properties, methods from the given class

class Party:
    def __init__(self, leader): #leader is a class
        self._leader = leader
        self._members = [leader]

    def add_member(self, member): #member is a class
        self._members.append(member)
        self._leader.say_welcome(member)
    
    def remove_member(self, member):
        if member == self._leader:
            raise ValueError("Cannot remove leader from party")
        
        self._members.remove(member)
        member.say_goodbye(self._leader)

    def dance(self):
        for member in self._members:
            member.dance()
    
    def sing(self):
        for member in self._members:
            member.sing()

    def vote_leader(self):
        if len(self._members) == 1:
            raise ValueError("You need at least two members to vote a new Leader")
        
        new_leader = self._leader
        while new_leader == self._leader:
            random_leader = random.randrange(len(self._members))
            new_leader = self._members[random_leader]
        self._leader.say('{} has been voted as our new Party leader'.format(new_leader.name))
        
        new_leader.dance()
        self._leader = new_leader



jake = Dog("Jake")
duke = Dog("Duke")
lady = Dog("Lady")
dako = Dog("Dako")

dogs_party = Party(jake)
dogs_party.add_member(duke)
dogs_party.add_member(lady)
dogs_party.add_member(dako)

dogs_party.dance()
dogs_party.remove_member(dako)
dogs_party.vote_leader()
dogs_party.sing()


class HorseDeejay:
    def __init__(self,name):
        self._name = name
    
    @property
    def name(self):
        return self._name

    def play_music_to_dance(self):
        print("My name is {}. Let's Dance.".format(self.name))
    
    def play_music_to_sing(self):
        print("Time to sing!")

class PartyWithDeeJay(Party): #subclass of Party , inheritting from Party
    def __init__(self, leader, dee_jay):
        super().__init__(leader) # super() refers to Party class, leader is a class
        self._dee_jay = dee_jay # think dee_jay is a class too

    @property
    def dee_jay(self):
        return self._dee_jay
    
    def dance(self):
        self._dee_jay.play_music_to_dance()
        super().dance()
    
    def sing(self):
        self._dee_jay.play_music_to_sing()
        super().sing()
    

silver = HorseDeejay("Silver")
silverParty = PartyWithDeeJay(jake, silver)

silverParty.add_member(duke)
silverParty.add_member(lady)
silverParty.add_member(dako)

silverParty.dance()
silverParty.remove_member(duke)
silverParty.vote_leader()
silverParty.sing()




    


    