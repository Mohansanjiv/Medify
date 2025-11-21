import { MenuItem, Select, Button, Box, FormControl } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";

export default function SearchHospital() {
    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);
    const [formData, setFormData] = useState({ state: "", city: "" });
    const navigate = useNavigate();

    // Fetch all states
    useEffect(() => {
        const fetchStates = async () => {
            try {
                const response = await axios.get(
                    "https://meddata-backend.onrender.com/states"
                );
                setStates(response.data);
            } catch (error) {
                console.error("Error fetching states:", error);
            }
        };

        fetchStates();
    }, []);

    // Fetch cities whenever state changes
    useEffect(() => {
        const fetchCities = async () => {
            setCities([]);
            setFormData((prev) => ({ ...prev, city: "" }));

            if (!formData.state) return;

            try {
                const data = await axios.get(
                    `https://meddata-backend.onrender.com/cities/${formData.state}`
                );
                setCities(data.data);
            } catch (error) {
                console.log("Error fetching cities:", error);
            }
        };

        fetchCities();
    }, [formData.state]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.state && formData.city) {
            navigate(`/search?state=${formData.state}&city=${formData.city}`);
        }
    };

    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
                display: "flex",
                gap: 3,
                flexDirection: { xs: "column", md: "row" },
                alignItems: "center",
            }}
        >
            {/* STATE DROPDOWN */}
            <FormControl fullWidth>
                <Select
                    // data-testid="state"
                    id="state"
                    displayEmpty
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    required
                    renderValue={(selected) =>
                        selected || "State"
                    }
                    sx={{
                        py: 1.2,
                        borderRadius: 2,
                        backgroundColor: "#f5f5f7",
                    }}
                >
                    <MenuItem disabled value="">
                        State
                    </MenuItem>

                    {states.map((state) => (
                        <MenuItem key={state} value={state}>
                            {state}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            {/* CITY DROPDOWN */}
            <FormControl fullWidth>
                <Select
                    // data-testid="city-dropdown"
                    id="city"
                    displayEmpty
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    renderValue={(selected) =>
                        selected || "City"
                    }
                    sx={{
                        py: 1.2,
                        borderRadius: 2,
                        backgroundColor: "#f5f5f7",
                    }}
                >
                    <MenuItem disabled value="">
                        City
                    </MenuItem>

                    {cities.map((city) => (
                        <MenuItem key={city} value={city}>
                            {city}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            {/* SEARCH BUTTON */}
            <Button
                id="search"
                type="submit"
                variant="contained"
                size="large"
                startIcon={<SearchIcon />}
                sx={{
                    px: 6,
                    py: 1.8,
                    borderRadius: 2,
                    flexShrink: 0,
                }}
            >
                Search
            </Button>
        </Box>
    );
}
