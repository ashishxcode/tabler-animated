"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M10 8l4 8"}],["path",{"d":"M10 16l4 -8"}],["path",{"d":"M12 3c7.2 0 9 1.8 9 9c0 7.2 -1.8 9 -9 9c-7.2 0 -9 -1.8 -9 -9c0 -7.2 1.8 -9 9 -9"}]];
const rig: Rig[] = [{"fx":"draw","n":[0,1],"o":[12,12],"dl":0.05,"st":0.1},{"fx":"pop","n":[2],"o":[12,12],"a":0.05}];

export const SquareRoundedLetterXIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
SquareRoundedLetterXIcon.displayName = "SquareRoundedLetterXIcon";
