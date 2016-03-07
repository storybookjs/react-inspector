export ObjectInspector from './object-inspector/ObjectInspector'
export TableInspector from './table-inspector/TableInspector'

// export ObjectDecription from './object/ObjectDescription'
// export ObjectPreview from './object/ObjectPreview'

// TODO:
export default const Inspector = ({ table }) => {
  if(table){
    return <TableInspector data={data} />
  }

  return <ObjectInspector data={data} />
}
