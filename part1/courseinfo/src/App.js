const course = 'Half Stack application development'
const part1 = 'Fundamentals of React'
const exercises1 = 10
const part2 = 'Using props to pass data'
const exercises2 = 7
const part3 = 'State of a component'
const exercises3 = 14

const Header = (prop) => {
  return (
  <>
    <h1>
      {prop.course}
    </h1>
  </>    
  )
}

const Part = (prop) => {
  return (
    <>
      <p>
        {prop.part} {prop.times}
      </p>
    </>
  )
}

const Content = (prop) => {
  return (
    <>
      <Part part = {part1.toString()} times = {exercises1.toString()} />
      <Part part = {part2.toString()} times = {exercises2.toString()} />
      <Part part = {part3.toString()} times = {exercises3.toString()} />
    </>
  )
}

const Total = (prop) => {
  return (
    <>
      <p>
        Number of exercises {exercises1 + exercises2 + exercises3}
      </p>
    </>
  )
}

function foo() {
  let t = [1, 2, 3]
  t.push(4)
  const t1 = t.concat(5)

  const [first, second, ...rest] = t
  console.log(first, second)
  console.log(rest)

  const mp = t1.map(value => value * 2)
  console.log(mp)

  var mp1 = t1.map(value => '<li>' + value + '</li>')
  console.log(mp1)

  // t1.forEach(value =>{
  //   console.log(value)
  // })
  const obj1 = {
    name: 'Roy Chen',
    age: 20,
    education: 'ZJU',
  }

  console.log(obj1.name)
  const College = 'education'
  console.log(obj1[College])
  obj1.addr = 'Toyko'

  const sum = (arg1, arg2) => {
    return arg1 + arg2
  }

  const square = p => p * p

  const arr = [1, 2, 3]
  const mp3 = arr.map(p => p * p)

  console.log(mp3)
}



const App = () => {
  console.log("Hello!")
  foo()
  return (
    <div>
      <Header course = {course} />
      <Content />
      <Total />
    </div>
  )
}

export default App