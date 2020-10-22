import React, { Component } from "react";

import subjectTabs from "../../constants/tabsConsts";
import TextCard from "../../common/cards/textCard";

import http from "../../../services/httpService";
import { Route, Switch } from "react-router-dom";
import GradeDetails from "./gradeDetails";
import SubjectTabs from "./subjectTabs";

class SubjectDetails extends Component {
  state = { subjectDetails: null };

  async componentDidMount() {
    const { pathname, search } = this.props.location;

    const url = pathname + search;

    // Get subject details data from the service
    const { data } = await http.get(`${url}`);

    const { subjectService: subjectDetails } = data;

    this.setState({ subjectDetails });

    console.log(this.state.subjectDetails);
  }

  render() {
    // Get pathname (url)
    const { pathname } = this.props.location;

    if (this.state.subjectDetails) {
      const {
        diary,
        gradeTypes,
        subjectInfo: subjectDetails,
      } = this.state.subjectDetails;

      return (
        <React.Fragment>
          <TextCard
            titleMain={subjectDetails.subjectName}
            titleSub={subjectDetails.teacherName}
            variant="outlined"
          />
          <Switch>
            <Route
              path="/subjects/:subjectSlug/:gradeTypeSlug"
              component={GradeDetails}
            />
            <Route
              path="/subjects/:subjectSlug"
              render={() => (
                <SubjectTabs
                  subjectTabs={subjectTabs}
                  pathname={pathname}
                  gradeTypes={gradeTypes}
                  diary={diary}
                />
              )}
            />
          </Switch>
        </React.Fragment>
      );
    }

    return null;
  }
}

export default SubjectDetails;
