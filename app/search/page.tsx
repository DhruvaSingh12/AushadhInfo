import Header from "@/components/Header";
import SearchInput from "./components/SearchInput";
import SearchContent from "./components/SearchContent";
import Box from "@/components/Box";
import getMedicineByQuery from "@/actions/getMedicineByQuery";

interface SearchProps {
    searchParams: {
        query?: string;
    }
};

export const revalidate = 0;

const Search = async ({ searchParams }: SearchProps) => {
    const { query } = searchParams;
    const medicines = await getMedicineByQuery(query || "");

    return (
        <div className="
            bg-white
            rounded-lg
            h-full
            w-full
            overflow-hidden
            overflow-y-auto
        ">
            <div className="
                w-full
                flex
                flex-col
                gap-y-2
                bg-white
                h-full
            ">
                <Box>
                    <Header>
                        <div className="mb-2 flex flex-col gap-y-3">
                            <h1 className="text-black text-4xl font-semibold">
                                SEARCH MEDICINES
                            </h1>
                            <SearchInput />
                        </div>
                    </Header>
                </Box>
                <Box className="overflow-y-auto flex-1 h-full">
                    <div className="mt-4 mb-4">
                        <SearchContent medicines={medicines} />
                    </div>
                </Box>
            </div>
        </div>
    )
};

export default Search;
