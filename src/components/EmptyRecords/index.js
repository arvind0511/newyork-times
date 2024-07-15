const EmptyRecords = (props) => {
    const { records = 'records' } = props

    return (
        <>
          <div className="empty-container">
            No {records} found!....
          </div>
        </>
    )
}

export default EmptyRecords;