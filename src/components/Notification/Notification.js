import Description from '../Description/Description'
import Header from '../Header/Header'

const Notification = ({header, text, image, className}) => {
  return (
    <div className={`gap-7 border-2 border-solid border-indigo-500 rounded-3xl bg-indigo-100 my-10 relative flex p-12 items-center w-full ${className?className:''}`}>
      {
        image && (
          <div className='flex-initial'>
            <figure>
              <img src={image} alt={image} />
            </figure>
          </div>
        )
      }
      <div className='flex-1'>
        <div>
          {
            header && (
              <Header className={'text-start text-3xl mb-4'} text={header} />
            )
          }
          <Description>
            <p>
            {text}
            </p>
          </Description>
        </div>
      </div>
    </div>
  )
}

export default Notification