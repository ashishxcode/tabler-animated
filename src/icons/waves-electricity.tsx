"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 12c.576 -.643 1.512 -1.017 2.5 -1c.988 -.017 1.924 .357 2.5 1c.576 .643 1.512 1.017 2.5 1c.988 .017 1.924 -.357 2.5 -1"}],["path",{"d":"M3 16c.576 -.643 1.512 -1.017 2.5 -1c.988 -.017 1.924 .357 2.5 1c.576 .643 1.512 1.017 2.5 1c.988 .017 1.924 -.357 2.5 -1"}],["path",{"d":"M3 8c.576 -.643 1.512 -1.017 2.5 -1c.988 -.017 1.924 .357 2.5 1c.576 .643 1.512 1.017 2.5 1c.988 .017 1.924 -.357 2.5 -1"}],["path",{"d":"M20 7l-3 5h4l-3 5"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2,3],"o":[12,12]}];

export const WavesElectricityIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
WavesElectricityIcon.displayName = "WavesElectricityIcon";
