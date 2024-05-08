const Header = (prop) => {
  return (
    <>
      <h1>
        {prop.course}
      </h1>
    </>
  )
}

const Content = (prop) => {
  var parts = prop.parts
  parts = parts.map(
    value => /*'<p>' + */ value['name'] + ' ' + value['exercises'] //+ '</p>'
  )
  console.log(parts)

  return (
    <>
      <p>{parts[0]}</p>
      <p>{parts[1]}</p>
      <p>{parts[2]}</p>
    </>
  )
}

const Total = (prop) => {
  const times = prop.parts.map(value => value['exercises'])
  var sum = 0;
  times.forEach(value => {
    sum += value
  });

  return (
    <p>
      Number of exercises {sum}
    </p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

export default App