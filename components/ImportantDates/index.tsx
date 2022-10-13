import React from "react";
import { ListItem } from "@chakra-ui/react";
import { ImportantDate } from "../../types/Dates";
import { importantDates } from "../../data/ImportantDates";
import { ListRow, RowDate, RowDesc, StyledUnorderedList, Title, Wrapper } from "./styles";

export default function ImportantDates() {
    const dates: ImportantDate[] = importantDates;

    function datesComponent(dates: ImportantDate[]): React.ReactNode {
        return dates.map((date) => {
            return (
                <ListItem key={date.id}>
                    <ListRow>
                        <RowDate>
                            {`${date.date}:`}
                        </RowDate>
                        <RowDesc>
                            {date.description}
                        </RowDesc>
                    </ListRow>
                </ListItem>
            )
        })
    }

    return (
        <Wrapper>
            <Title>
                IMPORTANT DATES
            </Title>
            <StyledUnorderedList>
                {datesComponent(dates)}
            </StyledUnorderedList>
        </Wrapper>
    )
}
