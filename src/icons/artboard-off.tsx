"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M12 8h3a1 1 0 0 1 1 1v3"}],["path",{"d":"M15.716 15.698a1 1 0 0 1 -.716 .302h-6a1 1 0 0 1 -1 -1v-6c0 -.273 .11 -.52 .287 -.7"}],["path",{"d":"M3 8h1"}],["path",{"d":"M3 16h1"}],["path",{"d":"M8 3v1"}],["path",{"d":"M16 3v1"}],["path",{"d":"M20 8h1"}],["path",{"d":"M20 16h1"}],["path",{"d":"M8 20v1"}],["path",{"d":"M16 20v1"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[10],"o":[12,12],"dl":0.25},{"fx":"pop","n":[7,9],"o":[18.5,18.5],"a":0.35,"dl":0.2},{"fx":"pop","n":[0,1,2,3,4,5,6,8],"a":0.24,"dl":0.1,"st":0.07,"os":[[14,10],[11.86,12.15],[3.5,8],[3.5,16],[8,3.5],[16,3.5],[20.5,8],[8,20.5]]}];

export const ArtboardOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ArtboardOffIcon.displayName = "ArtboardOffIcon";
