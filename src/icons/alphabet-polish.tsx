"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M7 10h2a2 2 0 0 1 2 2v5h-3a2 2 0 1 1 0 -4h3"}],["path",{"d":"M16 7v10"}],["path",{"d":"M18 11l-4 2"}],["path",{"d":"M10.5 17a1.5 1.5 0 0 0 0 3"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1],"o":[11,12],"a":0.06},{"fx":"pop","n":[2,3],"a":0.24,"dl":0.1,"st":0.07,"os":[[16,12],[9.75,18.5]]}];

export const AlphabetPolishIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
AlphabetPolishIcon.displayName = "AlphabetPolishIcon";
