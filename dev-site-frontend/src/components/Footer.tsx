const Footer = () => {
    return (
      <footer className="border-t py-8">
        <div className="container mx-auto px-4 flex justify-center">
          <p className="caption text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} shawnnygoh. All rights reserved.
          </p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
