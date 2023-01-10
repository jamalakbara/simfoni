import Block from '../BlockItem/BlockItem'

const Blocks = ({blocks}) => {
  return (
    <div className='grid grid-cols-3 gap-16'>
      {blocks.map(block => (
        <Block key={block.key} src={block.src} header={block.header} desc={block.description} />
      ))}
    </div>
  )
}

export default Blocks