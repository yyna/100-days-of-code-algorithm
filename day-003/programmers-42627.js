// 출처: https://programmers.co.kr/learn/courses/30/lessons/42627
// 힙

// Priority Queue Source - https://www.geeksforgeeks.org/implementation-priority-queue-javascript/
// User defined class
// to store element and its priority
class QElement {
    constructor(start, length, priority) {
        this.start = start
        this.length = length
        this.priority = priority
    }
}

// PriorityQueue class
class PriorityQueue {
    // An array is used to implement priority
    constructor() {
        this.items = []
    }

    // enqueue function to add element
    // to the queue as per priority
    enqueue(start, length, priority) {
        // creating object from queue element
        const qElement = new QElement(start, length, priority)
        let contain = false

        // iterating through the entire
        // item array to add element at the
        // correct location of the Queue
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].priority > qElement.priority) {
                // Once the correct location is found it is
                // enqueued
                this.items.splice(i, 0, qElement)
                contain = true
                break
            }
        }

        // if the element have the highest priority
        // it is added at the end of the queue
        if (!contain) {
            this.items.push(qElement)
        }
    }

    // dequeue method to remove
    // element from the queue
    dequeue() {
        return this.items.shift()
    }

    // front function
    front() {
        // returns the highest priority element
        // in the Priority queue without removing it.
        if (this.isEmpty()) return 'No elements in Queue'
        return this.items[0]
    }

    // isEmpty function
    isEmpty() {
        // return true if the queue is empty.
        return this.items.length === 0
    }
}

// eslint-disable-next-line no-unused-vars
function solution(jobs) {
    const timeQueue = new PriorityQueue()
    const lengthQueue = new PriorityQueue()

    // 모든 작업을 timeQueue 에 넣기
    jobs.forEach((job) => {
        timeQueue.enqueue(job[0], job[1], job[0])
    })

    let time = 0
    let front = timeQueue.front()
    let answer = 0

    while (!timeQueue.isEmpty() || !lengthQueue.isEmpty()) {
        // 현재 시간에 실행 가능한 작업을 lengthQueue 로 옮기기
        while (!timeQueue.isEmpty() && front.start <= time) {
            const { start, length } = timeQueue.dequeue()
            lengthQueue.enqueue(start, length, length)
            front = timeQueue.front()
        }

        if (lengthQueue.isEmpty()) {
            // 현재 실행 가능한 작업이 없으면 시간++
            time++
        } else {
            // 현재 실행 가능한 작업 중 length 가 가장 짧은 작업을 실행
            const { start, length } = lengthQueue.dequeue()
            time += length
            answer += time - start
        }
    }

    return parseInt(answer / jobs.length, 0)
}
