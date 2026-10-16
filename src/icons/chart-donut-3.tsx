"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M12 3v5m4 4h5"}],["path",{"d":"M8.929 14.582l-3.429 2.918"}],["path",{"d":"M8 12a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"}],["path",{"d":"M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"}]];
const rig: Rig[] = [{"fx":"tilt","n":[0,1,2,3],"o":[12,12],"a":-14}];

export const ChartDonut3Icon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ChartDonut3Icon.displayName = "ChartDonut3Icon";
