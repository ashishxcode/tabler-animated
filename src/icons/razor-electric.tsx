"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M8 3v2"}],["path",{"d":"M12 3v2"}],["path",{"d":"M16 3v2"}],["path",{"d":"M9 12v6a3 3 0 0 0 6 0v-6h-6"}],["path",{"d":"M8 5h8l-1 4h-6l-1 -4"}],["path",{"d":"M12 17v1"}]];
const rig: Rig[] = [{"fx":"flash","n":[0,1,2,3,4,5],"o":[12,12]}];

export const RazorElectricIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
RazorElectricIcon.displayName = "RazorElectricIcon";
