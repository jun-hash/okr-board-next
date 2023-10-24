        import React from 'react';
        import { Button, Card } from '@material-ui/core';
        import OKRBoard from './OKRBoard'; // Assuming OKRBoard is a custom component with CRUD functionality

        const Home = () => {
          return (
            <div>
              <Card>
                <Button variant="contained" color="primary">
                  Hello World
                </Button>
              </Card>
              <OKRBoard />
            </div>
          );
        };

        export default Home;