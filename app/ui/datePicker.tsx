import { Flex, Select } from '@radix-ui/themes';
import { months } from '@/app/lib/definitions';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function DatePicker() {
    const router = useRouter();
    const [selectedMonth, setSelectedMonth] = useState<(typeof months)[0]>();

    const handleMonthChange = (value: string) => {
        const month = months.find((month) => month.name === value);
        if (month) {
            setSelectedMonth(month);
        }
    };

    const handleDayChange = (value: string) => {
        router.push(`/${selectedMonth?.name.toLowerCase()}/${value}`);
    };

    return (
        <Flex direction="column" align="center" gap="2" mt="8">
            <Select.Root onValueChange={handleMonthChange}>
                <Select.Trigger placeholder="Select a month" />
                <Select.Content>
                    <Select.Group>
                        <Select.Label>Months</Select.Label>
                        {months.map((month) => (
                            <Select.Item key={month.name} value={month.name}>
                                {month.name}
                            </Select.Item>
                        ))}
                    </Select.Group>
                </Select.Content>
            </Select.Root>
            {selectedMonth && (
                <Select.Root onValueChange={handleDayChange}>
                    <Select.Trigger placeholder="Select a day" />
                    <Select.Content>
                        <Select.Group>
                            <Select.Label>Days</Select.Label>
                            {selectedMonth.days.map((day) => (
                                <Select.Item key={day} value={day.toString()}>
                                    {day}
                                </Select.Item>
                            ))}
                        </Select.Group>
                    </Select.Content>
                </Select.Root>
            )}
        </Flex>
    );
}
