import './Title.css'
export default function Title(props) {
  return (
    <div className='title-block'>
      <h1 className="title">{props.title}</h1>
      <br />
      <h2 className="subtitle">All the latest events in {props.subtitle}</h2>
    </div>
  )
}