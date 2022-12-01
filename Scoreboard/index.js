let sumHome = document.getElementById("sum_home");
let homecount = 0;
let sumGuest = document.getElementById("sum_guest");
let guestCount = 0;

function HomeAddOne() {
	homecount += 1;
	sumHome.textContent = homecount;
}

function HomeAddTwo() {
	homecount += 2;
	sumHome.textContent = homecount;
}

function HomeAddThree() {
	homecount += 3;
	sumHome.textContent = homecount;
}

function GuestAddOne() {
	guestCount += 1;
	sumGuest.textContent = guestCount;
}

function GuestAddTwo() {
	guestCount += 2;
	sumGuest.textContent = guestCount;
}

function GuestAddThree() {
	guestCount += 3;
	sumGuest.textContent = guestCount;
}
