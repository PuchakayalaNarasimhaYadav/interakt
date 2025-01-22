import * as React from "react";
import { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import MenuDrawer from "../../Resuablecomponents/MenuDrawer";
import CreateData from "./CreateData";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import MenuButton from "../../Resuablecomponents/MenuButton";
import { getrandomColors } from "../../../utils";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import TocIcon from "@mui/icons-material/Toc";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import dayjs from "dayjs";

const TableHeadData = [
  "Holidays",
  "Date",
  "Description",
  "HolidayType",
  "Actions",
];

const TableBodydata = [
  {
    id: 1,
    name: "sankranthi",
    date: "13/01/2025 - 15/01/2025",
    description: "its a Public Holiday",
    type: {
      type: ["Public holiday"],
    },
  },
];

const menuItems = [
  { id: 1, name: "Edit" },
  { id: 2, name: "Delete" },
];


export const CalendarHeader = ({ calendarRef }) => {
  const [displayDates, setDisplayDates] = useState(dayjs().format("YYYY-MMMM"));
  const [currentView, setCurrentView] = useState("dayGridMonth"); // Initial view: Month

  // Function to update the display date based on the current view
  const updateDisplayDate = () => {
    const calendarApi = calendarRef.current.getApi();
    const currentDate = calendarApi.getDate();
    let formattedDate;

    if (currentView === "dayGridMonth") {
      formattedDate = dayjs(currentDate).format("MMMM YYYY");
    } else if (currentView === "dayGridWeek") {
      const startOfWeek = dayjs(currentDate).startOf("week").format("MMM  DD");
      const endOfWeek = dayjs(currentDate).endOf("week").format("DD, YYYY");
      formattedDate = `${startOfWeek} - ${endOfWeek}`;
    } else if (currentView === "dayGridDay") {
      formattedDate = dayjs(currentDate).format("MMMM DD , YYYY");
    }

    setDisplayDates(formattedDate);
  };

  // Update the display date whenever the view or date changes
  useEffect(() => {
    updateDisplayDate();
  }, [calendarRef, currentView]);

  const handlePrev = () => {
    const calendarApi = calendarRef.current.getApi();
    calendarApi.prev();
    updateDisplayDate();
  };

  const handleNext = () => {
    const calendarApi = calendarRef.current.getApi();
    calendarApi.next();
    updateDisplayDate();
  };

  const handleViewChange = (view) => {
    setCurrentView(view);
    const calendarApi = calendarRef.current.getApi();
    calendarApi.changeView(view);
    updateDisplayDate();
  };

  return (
    <div className="calendar-header flex gap-2">
      <div className="flex gap-1 min-w-[170px] justify-between">
      <button onClick={handlePrev}><KeyboardArrowLeftIcon /></button>
      <button>{displayDates}</button>
      <button onClick={handleNext}><ChevronRightIcon /></button>
      </div>
      <div className="flex gap-2">
      <button className="border p-1 rounded-[30px]" onClick={() => handleViewChange("dayGridMonth")}>Month</button>
      <button className="border p-1 rounded-[30px]" onClick={() => handleViewChange("dayGridWeek")}>Week</button>
      <button className="border p-1 rounded-[30px]" onClick={() => handleViewChange("dayGridDay")}>Day</button>
      </div>
    </div>
  );
};








export default function TableData() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [tableData, setTableData] = useState(() => Array(10).fill(null));
  const [activeView, setActiveView] = useState("calendar");
  const calendarRef = React.useRef(null);
  console.log(activeView, "activeView");

  console.log(tableData, "tableData");

  useEffect(() => {
    if (tableData.every((data) => data === null)) {
      const data = Array.from({ length: 10 }, (_, index) => ({
        ...TableBodydata[index % TableBodydata.length],
        id: index + 1,
      }));
      setTableData(data);
    }
  }, [tableData]);

  return (
    <>
      <div className=" border text-white bg-slate-700 px-4 py-3 flex  flex-col gap-4">
        <div className=" self-start bg-[#666666] rounded-md  flex  cursor-pointer">
          <div className={`flex-1 ${activeView === "calendar" ? "bg-green-500" :'bg-[#666666]'} rounded-l-md p-2`}
           onClick={()=>setActiveView('calendar')}>
            <CalendarMonthIcon />
          </div>
          
          <div className={` flex-1 rounded-r-md p-2  ${activeView === "tableView" ? "bg-green-500" :'bg-[#666666]' }`}
            onClick={()=>setActiveView("tableView")}>
            <TocIcon />
          </div>
        </div>
        <CalendarHeader calendarRef={calendarRef} />
        <div className="self-end border">
          <Button
            variant="contained"
            sx={{ textTransform: "capitalize" }}
            onClick={() => setOpenDrawer(true)}
          >
            Add new
          </Button>
        </div>
        {activeView === "calendar" && (
          <div>
            
      <FullCalendar
        ref={calendarRef}
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={false} // Disable default header
      />
          </div>
        )}
        {activeView === "tableView" && (
          <div >
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 , height:500}} aria-label="simple table">
                <TableHead
                  sx={{
                    backgroundColor: "#64748B",
                    position: "sticky",
                    top: 0,
                    
                  }}
                >
                  <TableRow>
                    {TableHeadData &&
                      TableHeadData.map((item, index) => (
                        <TableCell align="center" key={index}>
                          {item}
                        </TableCell>
                      ))}
                  </TableRow>
                </TableHead>
                <TableBody >
                  {tableData &&
                    tableData?.map((row) =>
                      row ? (
                        <TableRow
                          key={row.id}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell component="th" scope="row" align="center">
                            {row.name}
                          </TableCell>
                          <TableCell align="center">{row.date}</TableCell>
                          <TableCell align="center">
                            {row.description}
                          </TableCell>
                          <TableCell align="center">
                            {row.type?.type?.map((item, index) => {
                              const normalizedType = item
                                .toLowerCase()
                                .replace(/\b\w/g, (char) => char.toUpperCase());
                              const { color } = getrandomColors(normalizedType);
                              return (
                                <p
                                  key={index}
                                  style={{ color: color || "black", margin: 0 }}
                                >
                                  {item}
                                </p>
                              );
                            })}
                          </TableCell>
                          <TableCell align="center">
                            <MenuButton
                              menuStyles={{
                                backgroundColor: "green",
                              }}
                              menuItems={menuItems}
                              icontext={<MoreHorizIcon color="black" />}
                            />
                          </TableCell>
                        </TableRow>
                      ) : null
                    )}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        )}
      </div>
      {openDrawer && (
        <MenuDrawer onClose={() => setOpenDrawer(false)} open={openDrawer}>
          <CreateData />
        </MenuDrawer>
      )}
    </>
  );
}
