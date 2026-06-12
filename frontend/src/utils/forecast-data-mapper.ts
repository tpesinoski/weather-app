export const mapForecastData = (data: any) => {
    const mappedData: any[] = [];
    mappedData.push({ day: days[new Date(data.list[0].dt_txt).getDay()], ...data.list[0] });

    data.list.map((item: any) => {
        if (!mappedData.find((elm: any) => elm.day === days[new Date(item.dt_txt).getDay()])) {
            mappedData.push({ day: days[new Date(item.dt_txt).getDay()], ...item });
        }
    });
    return mappedData;
}
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];