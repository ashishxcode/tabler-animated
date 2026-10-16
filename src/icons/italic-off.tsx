"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M11 5h6"}],["path",{"d":"M7 19h6"}],["path",{"d":"M11.8 12.9l-1.8 6.1"}],["path",{"d":"M2.8 3l18 18"}],["path",{"d":"M14 5l-1.2 4.1"}]];
const rig: Rig[] = [{"fx":"draw","n":[3],"o":[11.8,12],"dl":0.25},{"fx":"draw","n":[2],"o":[10.9,15.95],"st":0.07}];

export const ItalicOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ItalicOffIcon.displayName = "ItalicOffIcon";
