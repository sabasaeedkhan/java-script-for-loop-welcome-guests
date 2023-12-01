let guests = ['saba', 'huma', 'mahnoor', 'faiza', 'kainat', 'manal', 'zubariyah', 'anna', 'mahwish', 'eman']

for (let a = 0; a < 10; a++) {
    console.log(a, guests[a])
}


// condition #1

for (let a = 0; a < guests.length; a++) {

    if (guests[a].length < 10) {
        console.log(`Miss ${guests[a]} welcome You are invited `)
    }
    if (guests[a].startsWith('A') || guests[a].startsWith('a')) {
        console.log(`Miss ${guests[a]}  Welcome You are invited `)
    }
    else {
        console.log(`Miss ${guests[a]} sorry you are  Not invited`)
    }
}


// condition # 2

for (let a = 0; a < guests.length; a++) {
    if (guests[a].startsWith('A', 'a') || guests[a].endsWith('a', 'A')) {
        console.log(`Miss ${guests[a]}  Welcome You are invited `)
    }
    else {
        console.log(`Miss ${guests[a]} sorry you are  Not invited`)
    }
}


// condition #3

for (let a = 0; a < guests.length; a++) {
    if (guests[a][0] === "A" || guests[a][0] == 'a') {
        console.log(`Miss ${guests[a]} welcome You are invited`)
    }
    else {
        console.log(`Miss ${guests[a]}sorry you are Not invited`)
    }

}

