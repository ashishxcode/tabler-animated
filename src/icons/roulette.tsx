"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M10.586 10.586l-1.586 -1.586"}],["path",{"d":"M13.414 10.586l1.586 -1.586"}],["path",{"d":"M13.414 13.414l1.586 1.586"}],["path",{"d":"M10.586 13.414l-1.586 1.586"}],["path",{"d":"M14 12a2 2 0 1 1 -4 0a2 2 0 0 1 4 0"}],["path",{"d":"M16.5 4.206l-.5 .866"}],["path",{"d":"M7.5 19.794l.5 -.866"}],["path",{"d":"M19.794 7.5l-.866 .5"}],["path",{"d":"M4.206 16.5l.866 -.5"}],["path",{"d":"M7.5 4.206l.5 .866"}],["path",{"d":"M16.5 19.794l-.5 -.866"}],["path",{"d":"M4.206 7.5l.866 .5"}],["path",{"d":"M19.794 16.5l-.866 -.5"}],["path",{"d":"M12 3v1"}],["path",{"d":"M12 21v-1"}],["path",{"d":"M21 12h-1"}],["path",{"d":"M3 12h1"}],["path",{"d":"M12 21a9 9 0 1 1 0 -18a9 9 0 0 1 0 18"}]];
const rig: Rig[] = [{"fx":"pop","n":[17],"o":[12,12],"a":0.06},{"fx":"pop","n":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],"a":0.24,"dl":0.1,"st":0.07,"os":[[9.79,9.79],[14.21,9.79],[14.21,14.21],[9.79,14.21],[12,12],[16.25,4.64],[7.75,19.36],[19.36,7.75],[4.64,16.25],[7.75,4.64],[16.25,19.36],[4.64,7.75],[19.36,16.25],[12,3.5],[12,20.5],[20.5,12],[3.5,12]]}];

export const RouletteIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
RouletteIcon.displayName = "RouletteIcon";
