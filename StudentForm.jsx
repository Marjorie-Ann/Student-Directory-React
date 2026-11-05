const StudentForm = () => {
    return (
    <>

<section>
            <h2>Add Student</h2>
            <form id="student-form">
                <div>
                    <label for="studentName">Student Name:</label>
                    <input type="text" id="studentName" name="studentName"></input>
                </div>
                <div>
                    <label for="program">Program:</label>
                    <input type="text" id="program" name="program"></input>
                </div>
                <button type="submit">add student</button>
            </form>
        </section>
    </>
    )
}

export default StudentForm