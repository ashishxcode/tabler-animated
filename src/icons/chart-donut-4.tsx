"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M8.848 14.667l-3.348 2.833"}],["path",{"d":"M12 3v5m4 4h5"}],["path",{"d":"M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"}],["path",{"d":"M14.219 15.328l2.781 4.172"}],["path",{"d":"M8 12a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"}]];
const rig: Rig[] = [{"fx":"tilt","n":[0,1,2,3,4],"o":[12,12],"a":-14}];

export const ChartDonut4Icon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ChartDonut4Icon.displayName = "ChartDonut4Icon";
