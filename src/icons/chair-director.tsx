"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M6 21l12 -9"}],["path",{"d":"M6 12l12 9"}],["path",{"d":"M5 12h14"}],["path",{"d":"M6 3v9"}],["path",{"d":"M18 3v9"}],["path",{"d":"M6 8h12"}],["path",{"d":"M6 5h12"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2,5,6],"o":[12,13],"a":0.06},{"fx":"pop","n":[3,4],"a":0.24,"dl":0.1,"st":0.07,"os":[[6,7.5],[18,7.5]]}];

export const ChairDirectorIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ChairDirectorIcon.displayName = "ChairDirectorIcon";
