"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"}],["path",{"d":"M12 18c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6c-.713 1.188 -1.478 2.199 -2.296 3.034"}],["path",{"d":"M16 19h6"}]];
const rig: Rig[] = [{"fx":"draw","n":[2],"o":[19,19],"dl":0.2,"st":0.08},{"fx":"blink","n":[0,1],"o":[12,12]}];

export const EyeMinusIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
EyeMinusIcon.displayName = "EyeMinusIcon";
