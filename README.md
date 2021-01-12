# Buffert-dag

Vi använder VS Code Live Share. Det är ett tillägg (extension) som behöver installeras.

Öppna README.md i preview-läge genom att högerklicka på filen så att den blir mer lättläst.

Ta verkligen tillfället att ställa "dumma frågor". Eller: det finns inga dumma frågor. Den som ställer flest frågor lär sig mest. Var aktiva så får ni ut max av den här stunden!

Upplägg:
- diskutera koncept. Koncept är gemensamma mellan olika programmeringsspråk.
- labba / demonstrera koncept i små filer.
- bygga något tillsammans, t.ex. inköpslista-app?

Vilka av följande koncept tycker DU är viktiga att hinna med idag? Vi kanske inte hinner med allt...

## Koncept

### Variabel
- deklarera (sker **en** gång).
- tilldela (kan ske noll, en, eller flera gånger)
- har ett namn och ett värde (datat)
- värdet (datat) är en av flera förutbestämda datatyper: string, boolean, number
- I javascript: Om variabeln är deklarerad med `const` så kan man bara göra tilldelning **1 gång**
- I javascript: Du behöver inte tala om vilken datatyp variabeln ska innehålla. I vissa språk måste man det!

PS: Vi försöker välja vettiga namn, och vi har vissa "riktlinjer" för bra / dåliga namn

### Operatorer
- aritmetiska (`+-*/`)
- boolean (`===`, `!==`, `>`, `<` med flera...)
- assignment (`=`)

## Uttryck

Allt som räknas ut till ett värde är ett **uttryck**. `3 + 3` kan räknas ut till `6`.

- Ett finare ord för att "räkna ut" eller "utvärdera" är att **evaluera**.
- På engelska heter uttryck **expression**

`"hello" + name` är också ett uttryck, vars värde beroer på vad variabeln `name` råkar har för värde när uttrycket evalueras.

`celsiusToKelvin(23)` är också ett uttryck, eftersom det här också kommer bli ett värde.

### Funktioner

Funktioner "gör" saker. Det är som programmeringsspråkens **verb**. Sitt! Stå! Klappa hunden! Hämta pengar! Det finns **inbyggda funktioner** och vi kan också **definiera egna funktioner**.

- När vi använder funktioner säger vi att vi "anropar" eller "kallar på" funktionen.
- När man anropar funktioner kan man skicka in data om man vill. Datat man skickar in kallas för **argument**.
- Om man vill skicka in flera argument så separerar man dem med kommatecken.
- Funktionerna kan också, men behöver inte, returnera data. Alltså skicka tillbaka data efter att de körts färdigt.
- Variabler som deklarerats i funktioner syns inte utanför. Dom är *lokala*.

En funktion har **ett namn**, **noll eller fler parametrar**, och **en funktionskropp**.

### Programmets flöde

Villkor (if, else)

Loopar (for, while)

Events, callbacks... (hur brukar en hemsida fungera? Du klickar och så händer något...)
(det går inte att pausa programmet...)
- I browser-världen finns det massor av events
- I node finns det också events, men de är mer avancerade..

### Objekt
- properties
- methods

När dyker objekt upp i praktiken?

Exempel på inbyggda objekt:
- [Console-objektet](https://www.w3schools.com/jsref/obj_console.asp)
- [Math-objektet](https://www.w3schools.com/js/js_math.asp)

### Algoritm vs. implementation

### Arrayer
- En [array](https://www.w3schools.com/js/js_arrays.asp) används för att lagra flera saker, som ett tåg med många vagnar. Varje vagn kan innehålla ett värde och kallas för ett **element**
- Till varje **element** hör ett **index**, som är dess position
- Man börjar räkna från noll, så första elementet har index 0
- En array i javascript är egentligen ett objekt, så den har properties och metoder
- En property är **length**. Vilket index har då det sista elementet?

### Anonyma funktioner

Anonyma funktioner saknar namn. De används ofta som argument till andra funktioner. T.ex. en clickHandler som beskriver vad som ska hända när du klickar på en knapp.

````javascript
button.addEventListener("click", function () {
    transferMoney(500)
})
````

Funktionen ovan behöver inte ges något namn eftersom den inte kommer att anropas från någon annan plats i koden.

### Arrow functions

Med hjälp av [arrow functions](https://www.w3schools.com/js/js_arrow_function.asp) kan man skriva kortare.

### Att lägga ihop strängar

#### Concatenation

`"hello " + firstName + " " + lastName + "!"` kallas för **string concatenation** (konkatenering på svenska).
Det är som addition för strängar.

### Interpolation

`hello ${firstName} ${lastName}!` kallas för **string interpolation**. Det är som att man fyller i hålen (det innanför måsvingarna) med värden.

Googla på *string interpolation javascript* för att hitta fler exempel!

# Övrigt

[reserved keywords in JavaScript](https://www.w3schools.com/js/js_reserved.asp)
Syntax, syntaxfel
Intellisense
Casing
Måsvingar
browser/DOM vs nodejs
kommentarer
