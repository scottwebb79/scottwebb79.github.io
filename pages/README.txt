
MACCS Training Information Training System Iteration/Feature Plans and CHANGELOG

*****************************************************************************
*                       Iteration/Feature Plans                             *
*****************************************************************************

Iteration 1: Profile Page
    1) Requirements                                                   status
       a. Must have profile picture, must be updatable/changable        50%
          i. Profile picture has been added, however upload and
             change option still remains to be created.
       b. Must list qualifications that pulls from back-end             10%
          i. Shell for qualifications generated
          ii. Awaiting back-end creation


Iteration 2: Live/Sim Training Entry (MTF Form)                                               Status

   1) Input Form on pop-up window (prefer iframe in modal)                                    Modal created

      a) Trainee Username
            i. Stage 1: Freetext textbox (datatype: string)
            ii. Stage 2: Dropdown with autocomplete of the
                trainees name. Format (Rank LName, FName) Datatype: (concenate string)
      
      b) Trainer Username
            i. Stage 1: Freetext textbox (datatype: string)
            ii. Stage 2: Dropdown with autocomplete of the
                trainees name. Format (Rank LName, FName) Datatype: (concenate string)

      c) Completion Date
            i. Start Date (mm/dd/yyyy) & Time (hh:mm 24hr) / input textbox w/ format
            ii. End Date (mm/dd/yyyy) & Time (hh:mm 24hr) / input textbox w/ format
            iii. Datatype (date)

      d) Exercise/Deployment Name
            i. input text box (datatype: string)

      e) Event Code and trainee performance
            i. Datatype (concenate string)
            ii. Shall include the event code field seperated by ":" and then short title
            iii. Radial option with U, 1, 2, 3, 4 option (single check, must check one)
      
      f) Student Comments
            i. Datatype: (string, unlimited charactures(TBD))
            ii. height should be adjustable with scrollbar
            iii. Prefer RTF with ability to bold, italic, text color, change font & size, multiline
      
      g) Instructor Comments
            i. Datatype: (string unlimited charactures(TBD))
            ii. Height should be adjustable with scrollbar
            iii. Prefer RTF with ability to bold, italic, text color, change font & size, multiline

****************************************************************************
*                                CHANGELOG                                 *
****************************************************************************