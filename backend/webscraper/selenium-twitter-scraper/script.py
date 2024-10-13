import subprocess

def run_scraper():
    # Define the command you want to run
    command = [
        'py', 'scraper', '--user=pierpressure123', '--password=pierpressure123',
        '-t', '100', '-q', 'الملاحدة', '--latest'
    ]
    
    try:
        # Run the command using subprocess
        result = subprocess.run(command, capture_output=True, text=True, check=True)

        # Print the output of the command
        print("Output:", result.stdout)
        print("Errors:", result.stderr)

    except subprocess.CalledProcessError as e:
        print(f"An error occurred while running the command: {e}")
        print(f"Output: {e.output}")
        print(f"Error: {e.stderr}")

if __name__ == "__main__":
    run_scraper()
