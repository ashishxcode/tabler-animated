"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M17.536 3.393c3.905 3.906 3.905 10.237 0 14.143c-3.906 3.905 -10.237 3.905 -14.143 0l14.143 -14.143"}],["path",{"d":"M5.868 15.06a6.5 6.5 0 0 0 9.193 -9.192"}],["path",{"d":"M10.464 10.464l4.597 4.597"}],["path",{"d":"M10.464 10.464v6.364"}],["path",{"d":"M10.464 10.464h6.364"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[11.93,11.93],"a":0.06},{"fx":"pop","n":[1,2,3,4],"a":0.24,"dl":0.1,"st":0.07,"os":[[11.42,11.42],[12.76,12.76],[10.46,13.65],[13.65,10.46]]}];

export const LemonIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
LemonIcon.displayName = "LemonIcon";
