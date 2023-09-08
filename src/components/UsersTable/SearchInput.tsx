

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ value, onChange }) => {
  return (
    <input 
      type="text" 
      placeholder="Search by user name..." 
      value={value} 
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

export default SearchInput;
