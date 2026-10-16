"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"}],["path",{"d":"M12 15l-4 -4h8l-4 4"}]];
const rig: Rig[] = [{"fx":"nudge","n":[0,1],"o":[12,12],"d":[0,1.92]}];

export const CircleCaretDownIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CircleCaretDownIcon.displayName = "CircleCaretDownIcon";
