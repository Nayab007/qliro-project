import React from "react"
import PropTypes from "prop-types"
import { useTheme, makeStyles } from "@material-ui/core/styles"
import { Button } from "@material-ui/core"

const useStyles1 = makeStyles((theme) => ({
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5),
  },
}))

function TablePaginationActions(props) {
  const classes = useStyles1()
  const theme = useTheme()
  const { count, page, rowsPerPage, onChangePage } = props

  const handleFirstPageButtonClick = (event) => {
    onChangePage(event, 0)
  }

  const handleBackButtonClick = (event) => {
    onChangePage(event, page - 1)
  }

  const handleNextButtonClick = (event) => {
    onChangePage(event, page + 1)
  }

  const handlePageChange = (event, page) => {
    onChangePage(event, page)
  }
  const numbers = count / rowsPerPage
  let arr = []
  for (let i = 1; i <= numbers; i++) {
    arr.push(i)
  }

  return (
    <div className={classes.root}>
      <Button className="icon_button" onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
        {theme.direction === "rtl" ? "Next" : "Back"}
      </Button>
      {arr &&
        arr.map((x, i) => {
          const buttonClassActive = page === i ? " icon_button_active" : "icon_button_inactive"
          return (
            <Button className={"icon_button " + buttonClassActive} key={i} onClick={(e) => handlePageChange(e, i)}>
              {x}
            </Button>
          )
        })}
      <Button className={"icon_button"} onClick={handleNextButtonClick} disabled={page >= Math.ceil(count / rowsPerPage) - 1} aria-label="next page">
        {theme.direction === "rtl" ? "Back" : "Next"}
      </Button>
    </div>
  )
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
}

export default TablePaginationActions
