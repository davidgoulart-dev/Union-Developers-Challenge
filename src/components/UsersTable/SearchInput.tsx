import "./UsersTable.scss";

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ value, onChange }) => {
  return (
    <input 
      type="text" 
      placeholder="Search user...." 
      value={value} 
      onChange={(e) => onChange(e.target.value)}
      className="Search-UsersTable"
    />
  );
}

export default SearchInput;
