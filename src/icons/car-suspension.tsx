"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M12 22a3 3 0 1 1 0 -6a3 3 0 0 1 0 6"}],["path",{"d":"M12 16v-12"}],["path",{"d":"M13 2h-2v2h2v-2"}],["path",{"d":"M9 11l6 -1"}],["path",{"d":"M9 14l6 -1"}],["path",{"d":"M9 8l6 -1"}]];
const rig: Rig[] = [{"fx":"slide","n":[0,1,2,3,4,5],"o":[12,12],"d":[2.4,0]}];

export const CarSuspensionIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CarSuspensionIcon.displayName = "CarSuspensionIcon";
