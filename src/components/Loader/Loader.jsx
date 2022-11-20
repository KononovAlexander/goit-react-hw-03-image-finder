import { Blocks } from 'react-loader-spinner'

export const Loader = () => (
    
        <Blocks
          visible={true}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          wrapperStyle={{
            display:'block',
            marginTop:'20%',
            marginLeft:'auto',
            marginRight:'auto'
          }}
          wrapperClass="blocks-wrapper"
        />
);