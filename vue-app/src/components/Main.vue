<template>
 <main class="grid-main">
    <div id="vue-main">
      <!-- {{}} - gets data from Vue data property. -->
      <h1 class="vue">{{h1}}</h1>
      <section class="vue">
        <h2>{{h2Welcome}}</h2>
        <!-- Checks condition(s) (to do this, function randomNumber, which is defined in Vue, is
            executed); if true, inserts corresponding {{welcome...}}. 
        -->
        <blockquote v-if="randomNumber < 0.25" v-bind:title="welcomeNote">
            {{welcomeMessageCharlie}}
        </blockquote>
        <blockquote
            v-else-if="randomNumber >= 0.25 && randomNumber < 0.50"
            v-bind:title="welcomeNote"
        >
            {{welcomeMessageLeo}}
        </blockquote>
        <blockquote
            v-else-if="randomNumber >= 0.50 && randomNumber < 0.75"
            v-bind:title="welcomeNote"
        >
            {{welcomeMessageLucky}}
        </blockquote>
        <blockquote v-else v-bind:title="welcomeNote">
            {{welcomeMessageSammy}}
        </blockquote>
      </section>

      <section>
        <h2 class="vue">{{h2Images}}</h2>
        <ul class="vue">
            <!-- Inserts names of pets via for loop. -->
            <li v-for="pet in pets" v-bind:key="pet.name">
              <a v-bind:href="`#${vueToLowerCase(pet.name)}`">{{pet.name}}</a>
            </li>
        </ul>

        <figure>
            <!-- v-on:eventType="methodToBeExecuted" is used for event listener. -->
            <img
            id="charlie"
            v-on:mouseover="mouseOverPets"
            v-on:mouseleave="mouseLeavePets"
            v-bind:src="charlie"
            v-bind:alt="charlieAltFigcaption"
            />
            <figcaption class="vue">{{charlieAltFigcaption}}</figcaption>
        </figure>

        <figure>
            <img
            id="leo"
            v-on:mouseover="mouseOverPets"
            v-on:mouseleave="mouseLeavePets"
            v-bind:src="leo"
            v-bind:alt="leoAltFigcaption"
            />
            <figcaption class="vue">{{leoAltFigcaption}}</figcaption>
        </figure>

        <figure>
            <img
            id="lucky"
            v-on:mouseover="mouseOverPets"
            v-on:mouseleave="mouseLeavePets"
            v-bind:src="lucky"
            v-bind:alt="luckyAltFigcaption"
            />
            <figcaption class="vue">{{luckyAltFigcaption}}</figcaption>
        </figure>

        <figure>
            <img
            id="sammy"
            v-on:mouseover="mouseOverPets"
            v-on:mouseleave="mouseLeavePets"
            v-bind:src="sammy"
            v-bind:alt="sammyAltFigcaption"
            />
            <figcaption class="vue">{{sammyAltFigcaption}}</figcaption>
        </figure>
      </section>

      <section>
        <h2 class="vue">{{h2Select}}</h2>
        <div class="vue">
            <select v-model="selection" v-on:change="onSelection">
            <option disabled value="">
                Please choose the least beautiful
            </option>
            <option>Charlie</option>
            <option>Leo</option>
            <option>Lucky</option>
            <option>Sammy</option>
            </select>
            <p>{{selectionResponse}}</p>
        </div>
      </section>
    </div>
  </main>
</template>

<script>
export default {
  name: "Main",
  data: () => ({
    h1: "Family pets in Vue",
    h2Welcome: "Random welcome message (reload page)",
    welcomeNote:
      "Reload the page to have the change to see another randomly selected welcome message.",
    h2Images: "You will get to know",

    randomNumber: 0,
    welcomeMessageCharlie:
      "Hello, my name is Charlie, and I am pleased to meet you!",
    welcomeMessageLeo:
      "Howdy, my name is Leo, and I once climbed up a closet and could not get back down!",
    welcomeMessageLucky:
      "Hi, my name is Lucky, and my hobbies are breakfast, lunch, and dinner!",
    welcomeMessageSammy:
      "Good day, my name is Sammy, and although it is illogical, I like to stand under tables. Correction: I love it!",

    "pets": [{"name":"Charlie"}, {"name":"Leo"}, {"name":"Lucky"}, {"name":"Sammy"}],

    charlie: require("../assets/images/pets/charlie-after.png"),
    charlieAfter: require("../assets/images/pets/charlie-after.png"),
    charlieBefore: require("../assets/images/pets/charlie-before.png"),
    charlieAltFigcaption: 'Labrador Charlie: "I am here to please!"',

    leo: require("../assets/images/pets/leo-after.png"),
    leoAfter: require("../assets/images/pets/leo-after.png"),
    leoBefore: require("../assets/images/pets/leo-before.png"),
    leoAltFigcaption: 'Cat Leo: "I can climb anything!"',

    lucky: require("../assets/images/pets/lucky-after.png"),
    luckyAfter: require("../assets/images/pets/lucky-after.png"),
    luckyBefore: require("../assets/images/pets/lucky-before.png"),
    luckyAltFigcaption: 'Golden Retriever Lucky: "I swear, Charlie ate it!"',

    sammy: require("../assets/images/pets/sammy-after.png"),
    sammyAfter: require("../assets/images/pets/sammy-after.png"),
    sammyBefore: require("../assets/images/pets/sammy-before.png"),
    sammyAltFigcaption: 'Corgi Sammy: "Indubitably, I am the smartest!"',

    h2Select: "Which is the least beautiful pet?",
    selection: "",
    selectionResponse: "",
    responses: {
      Charlie:
        "Woof! I am happy nonetheless. So, let us go! Off to the next adventure! Geronimo!",
      Leo:
        "Meow! Cough - ROAR! Well, you did not choose wisely! I do not forgive so quic... " +
        "- what was that? Did you see that? Sorry, I do not have time, I have to investigate this.",
      Lucky:
        "Woof? I forgive you. Now that we have got that sorted out - where is the food?",
      Sammy:
        "A good day to you, sir! Did you know - by inserting neotenous traits, it can make " +
        "certain subjects gain a cuter, more innocent or more wholesome appearance!?",
    },
  }),
   // Defines methods.
  methods: {
    vueToLowerCase: function(id) {return id.toLowerCase();},
    // Executed via event listener (mouseover).
    mouseOverPets: function (event) {
      if (event.target.id == "charlie") {
        //  this.charlie, this.charlieBefore, this... are defined in Vue's data.
        this.charlie = this.charlieBefore;
      } else if (event.target.id == "leo") {
        this.leo = this.leoBefore;
      } else if (event.target.id == "lucky") {
        this.lucky = this.luckyBefore;
      } else if (event.target.id == "sammy") {
        this.sammy = this.sammyBefore;
      }
    },
    // Executed via event listener (mouseleave).
    mouseLeavePets: function (event) {
      if (event.target.id == "charlie") {
        this.charlie = this.charlieAfter;
      } else if (event.target.id == "leo") {
        this.leo = this.leoAfter;
      } else if (event.target.id == "lucky") {
        this.lucky = this.luckyAfter;
      } else if (event.target.id == "sammy") {
        this.sammy = this.sammyAfter;
      }
    },
    // Executed via event listener (change).
    onSelection: function (event) {
      this.selectionResponse =
        event.target.value + ": " + this.responses[event.target.value];
    },
    setRandomNumber: function () {
      this.randomNumber = Math.random();
    },
  },
  /* Triggers when page is loaded. */
  created: function () {
    this.setRandomNumber(); /* Calls setRandomNumber() function. */
  },
}
</script>
